import { StateOptions } from '../../interfaces/service/state-service.interface';
import { createStateDecorator, StateDecoratorConfig } from '../index';

/**
 * Get the name of the application
 */
export function ApplicationName(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'application'
    }
    options.map = [getApplicationName, ...options.map || []];

    return createStateDecorator(options, config);
}

function getApplicationName(applicationData: any) {
    return applicationData.applicationName;
}