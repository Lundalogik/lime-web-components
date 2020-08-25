import {
    PlatformServiceName,
    StateOptions,
} from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../factory';

/**
 * Get the application session
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function Session(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.ApplicationState,
    };
    options.map = [getSession, ...(options.map || [])];

    return createStateDecorator(options, config);
}

function getSession(applicationData: any) {
    return applicationData.session;
}
