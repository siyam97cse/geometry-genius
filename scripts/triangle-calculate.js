
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