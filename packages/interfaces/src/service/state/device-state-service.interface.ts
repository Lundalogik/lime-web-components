import { StateService } from '../state-service.interface';

export interface DeviceStateService extends StateService {
    /**
     * Check if the device type is 'desktop'
     *
     * @returns {boolean} true/false
     */
    isDesktopSize(): boolean;

    /**
     * Check if the device type is 'tablet'
     *
     * @returns {boolean} true/false
     */
    isTabletSize(): boolean;

    /**
     * Check if the device type is 'phone'
     *
     * @returns {boolean} true/false
     */
    isPhoneSize(): boolean;
}
