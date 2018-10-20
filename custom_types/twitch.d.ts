declare module 'twitch' {

    /**
     * onAuthorized
     * @param callback 
     */
    export function onAuthorized(callback: (context: any, contextFields: any) => void): void;
    
    /**
     * onContext
     * @param callback 
     */
    export function onContext(callback: () => void): void;
    
    /**
     * onError
     * @param callback 
     */
    export function onError(callback: (error: any) => void): void;
    
    /**
     * 
     * @param callback 
     */
    export function onHighlightChanged(callback: () => void): void;

    /**
     * 
     * @param callback 
     */
    export function onPositionChange(callback: () => void): void;

    /**
     * 
     * @param callback 
     */
    export function onPositionChanged(callback: () => void): void;

    /**
     * 
     * @param callback 
     */
    export function onVisibilityChanged(callback: () => void): void;

    /**
     * 
     * @param callback 
     */
    export function send(callback: () => void): void;

    /**
     * 
     * @param callback 
     */
    export function listen(callback: () => void): void;
    
    /**
     * 
     * @param callback 
     */
    export function unlisten(callback: () => void): void;

}