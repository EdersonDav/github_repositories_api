import { HttpException, HttpStatus } from '@nestjs/common';
import { AxiosError } from 'axios';

export class ErrorHandler extends Error{
    handle(error: any, provider: string): void {
        if (error.isAxiosError) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                const status = axiosError.response.status;
                const message = `An error occurred while fetching data from ${provider}`;

                switch (status) {
                    case 404:
                        throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
                    case 403:
                        throw new HttpException('Forbidden access', HttpStatus.FORBIDDEN);
                    case 500:
                        throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
                    default:
                        throw new HttpException(message, status);
                }
            } else if (axiosError.request) {
                throw new HttpException(`No response received from ${provider}`, HttpStatus.GATEWAY_TIMEOUT);
            } else {
                throw new HttpException('An error occurred while setting up the request', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            throw new HttpException('An unexpected error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}