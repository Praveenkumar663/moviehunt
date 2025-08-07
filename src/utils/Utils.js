export function convertMinutes(minutes){
    const hours=Math.floor(minutes/60);
    const remainingMintues=minutes%60;
    return `${hours}h ${remainingMintues}m`
}