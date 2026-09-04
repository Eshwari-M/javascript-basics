export const APP_NAME="Math.App";
export const VERSION="1.0.0";
const utilities={
    log:(message)=>console.log(`[${APP_NAME} ${message}]`),
    error:(message)=>console.error(`[${APP_NAME} ERROR ${message}]`),
};
export default utilities;