/**
 * A class for measuring time
 */
module.exports = class TimeSpan {
    #startTime;
    #laps;
    /**
     * A Class for measuring time between operations
     * @param {Boolean} enabled? If disabled / false Timespan doesn't work. Just allocates private properties. True as default.
     */
    constructor(enabled = true) {
        this.enabled = enabled;
        if (enabled) {
            this.#startTime = new Date()
            this.#laps = []
            /**
             * Keeps all the lap records.
             */
            this.log = []
        }
    }
    /**
     * Sets the start time. If you want to run once you don't need to use this method.
     * @returns {TimeSpan} self
     */
    setStart(){
        if (this.enabled) {
            this.#startTime = new Date()
        }
        return this
    }
    /**
     * Stops the timer and add laps to logs and reset the timer and laps.
     * @returns {TimeSpan} self
     */
    stop() {
        if (this.enabled) {
            const endTime = new Date()
            const timer = (endTime - this.#startTime)/1000
            this.#laps.push(`${timer} s`)
            this.log.push(this.#laps);
            this.#laps = [];
        }
        return this.setStart();
    }
     /**
     * Resets TimeSpan to first state and clear all logs.
     * @returns {TimeSpan} self
     */
    reset() {
        if (this.enabled) {
            this.#startTime = new Date()
            this.#laps = []
            this.log = []
        }
        return this
    }
    /**
     * Calculates the elapsed time and adds to laps and reset the start time.
     * @returns {TimeSpan} self
     */
    lap() {
        if (this.enabled) {
            const lapTime = new Date();
            const lapTimer = (lapTime - this.#startTime)/1000
            this.#laps.push(`${lapTimer} s`)
        }
        return this
    }

    /**
     * Gets the log with callback function.
     * @param {Function} callback Callback function with a prameter of log.
     * @returns {TimeSpan} self
     */
    getLog(callback) {
        callback( (this.enabled) ? this.log : [] )
        return this
    }
    /**
     * Gets the laps with callback function.
     * @param {Funciton} callback Callback function with a prameter of lap.
     * @returns {TimeSpan} self
     */
    getLaps(callback) {
        callback( (this.enabled) ? this.#laps : [] )
        return this
    }
    /**
     * Log log array to the console
     * @returns {TimeSpan} self
     */
    logLog() {
        if (this.enabled) { 
            if (this.log.length > 0) {
                console.log(this.log)
            } else {
                console.error("No log available... Did you stop the counter?")
            }
        
        }
        return this;
    }
    /**
     * Log laps array to the console. If you want to manuplate records use getLog method or use directly log parameter.
     * @returns {TimeSpan} self
     */
    logLaps() {
        if (this.enabled) { 
            if (this.#laps.length > 0) { 
                console.log(this.#laps)
            } else { 
                if (this.log.length > 0) {
                    console.log(this.log[this.log.length - 1 ])
                } else {
                    console.error("No lap available... Did you lap / stop the counter?")
                }
            }
        }
        return this;
    }
}
