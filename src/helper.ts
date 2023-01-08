export const resizeWindow = (x: any, y: any) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
}