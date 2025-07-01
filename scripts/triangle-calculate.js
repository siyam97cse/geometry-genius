
function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangleBase');
    const triangleBaseText = triangleBaseInput.value; 
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightText = triangleHeightInput.value; 
    const height = parseFloat(triangleHeightText);
    console.log(height);
    
    const area = 0.5 * base * height;
    console.log(area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}   

function calculateRectangleArea() {
    const RectangleWidthInput = document.getElementById('RectangleWidth');
    const RectangleWidthText = RectangleWidthInput.value; 
    const width = parseFloat(RectangleWidthText);
    console.log(width);

    const RectangleHeightInput = document.getElementById('RectangleHeight');
    const RectangleHeightText = RectangleHeightInput.value; 
    const height = parseFloat(RectangleHeightText);
    console.log(height);
    
    const area = width * height;
    console.log(area);

    const RectangleAreaSpan = document.getElementById('Rectangle-area');
    RectangleAreaSpan.innerText = area;

} 