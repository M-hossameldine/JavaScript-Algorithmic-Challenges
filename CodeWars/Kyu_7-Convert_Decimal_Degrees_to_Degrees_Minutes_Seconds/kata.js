/*
Notes: 

How to Convert Decimal Degrees to Degree Minutes Seconds?
The conversion of degrees into degree-minute-seconds can be done with the help of the conversion factor of 60.This is because:
  - 1 degree = 60 minutes (60')
  - 1 minute = 60 seconds (60'')
The decimal part of a degree is first multiplied by 60 to get the measure in minutes. Then, the decimal part of the minutes is multiplied by 60 to get the measure in seconds.

Solved Example:
Convert 15.43° into degree-minutes-seonds.

Solution:
15.43° = 15° + (0.43 x 60')

       = 15° + 25.8'
       
       =15° + 25' + (0.8 x 60")
       
       = 15° + 25' + 48''
       
       = 15° 25' 48''
*/

function convert(degrees) {
    let dmsVersion = (degrees+'').replace(/(\d*)(\.\d*)/, (match, degrees = '', decimals) => {
    
      let result = degrees + ',';
      let minutes = 0;
      let seconds = 0;

      if (decimals) {
        minutes = Math.floor(decimals * 60);
        seconds = Math.round((decimals * 60 - minutes) * 60);
      }
      result += `${minutes},${seconds}`;

      return result.replace(/(,0+)+$/, '');
    })

    return dmsVersion.split(',').map(Number);
}



