/**
 * 
 *  setTimeout运行机制是：当程序执行到setTimeout函数时，
 *  处理器会将代码移出本次执行程序，等到下一次Event Loop时，再检查是否到了指定的时间。
 *  如果到了就执行对应的代码。如果不到， 就等到下一轮Event Loop时重新判断。这意味着，
 *  setTimeout指定的代码，必须等到本次执行的所有代码都执行完，才会执行。
 * 
 */
