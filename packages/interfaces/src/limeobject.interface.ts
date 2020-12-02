import { Limetype, Property } from './limetype.interface';

/**
 * Interface for the Lime object
 */
export interface LimeObject {
    /**
     * Id of the limeobject
     */
    id: number;

    /**
     * The created time of the limeobject
     */
    createdtime: string;

    /**
     * The last time the limeobject updated
     */
    timestamp: string;

    /**
     * Descriptive of the limeobject
     */
    descriptive: string;

    /**
     * Get related data of the object
     *
     * @param {Property} property the property of the related object
     */
    getRelation(property: Property): LimeObject;

    /**
     * Get the limetype of the object
     *
     * @returns {Limetype} the limetype
     */
    getLimetype(): Limetype;

    /**
     * Dynamic properties of the limeobject
     */
    [property: string]: any;
}
