function convert() {
            var number = document.getElementById("inputNumber").value;
            var conversionType = document.querySelector('input[name="conversionType"]:checked').value;
            var result = 0;
            var unit = "";

            if (conversionType === "feetToMeters") {
                result = number * 0.3048;
                unit = " meters";
            } else if (conversionType === "metersToFeet") {
                result = number / 0.3048;
                unit = " feet";
            } else if (conversionType === "kilometersToMiles") {
                result = number * 0.621371;
                unit = " miles";
            } else if (conversionType === "milesToKilometers") {
                result = number / 0.621371;
                unit = " kilometers";
            } else if (conversionType === "celsiusToF") {
                result = (number * 9/5) + 32;
                unit = " Fahrenheit";
            } else if (conversionType === "FToCelsius") {
                result = (number - 32) * 5/9;
                unit = " Celsius";
            } else if (conversionType === "kilogramsToPounds") {
                result = number * 2.20462;
                unit = " pounds";
            } else if (conversionType === "poundsToKilograms") {
                result = number / 2.20462;
                unit = " kilograms";
            } else if (conversionType === "gramsToOunces") {
                result = number * 0.035274;
                unit = " ounces";
            } else if (conversionType === "OuncesToGrams") {
                result = number / 0.035274;
                unit = " grams";
            }
            

            document.getElementById("output").textContent = result.toFixed(2) + unit;
        }
    