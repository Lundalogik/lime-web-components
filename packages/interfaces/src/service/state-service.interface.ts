import { Observable } from 'rxjs';
import { LimeWebComponentContext } from '../lime-web-component-context.interface';

/**
 * Service for letting a Lime web component subscribe to state changes
 */
export interface StateService {
    /**
     * Subscribe to state changes
     *
     * @param {Function} callback function to call when subscription updates
     * @param {StateOptions} [options] options for the state selector
     *
     * @returns {Function} unsubscribe callback
     */
    subscribe(callback: () => void, options?: StateOptions): () => void;
}

/**
 * Options for the state selector
 */
export interface StateOptions {
    /**
     * List of functions that will be used to map the state.
     * The functions will be bound to the web component instance
     */
    map?: Array<(state: any) => any>;

    /**
     * List of functions that will be used to filter any changes to the state.
     * The functions will be bound to the web component instance
     */
    filter?: Array<(state: any) => boolean>;
}

export interface ContextAwareStateOptions extends StateOptions {
    /**
     * An observable that emits a new value when the context of the component
     * is changed. If set, the corresponding state service will emit a new value
     * when the context has changed as well. Only applies to states that are
     * aware of the context, e.g. `CurrentLimetype` and `CurrentLimeobject`
     */
    context?: Observable<LimeWebComponentContext>;
}

export * from './state/config-service.interface';
export * from './state/device-state-service.interface';
export * from './state/limeobjects-service.interface';
export * from './state/user-data-service.interface';
