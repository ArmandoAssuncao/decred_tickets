import { ISaveDeviceNotifIdAction } from './types'

export const USER_SAVE_DEVICE_NOTIF_ID = 'USER_SAVE_DEVICE_NOTIF_ID'

export const saveDeviceNotifId = (id: string): ISaveDeviceNotifIdAction => ({
    payload: id,
    type: USER_SAVE_DEVICE_NOTIF_ID,
})
