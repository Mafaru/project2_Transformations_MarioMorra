// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform(positionX, positionY, rotation, scale) {
	var rotationinRad = (rotation * Math.PI) / 180;
  
	const cosRot = Math.cos(rotationinRad);
	const sinRot = Math.sin(rotationinRad);
  
	const transformationMatrix = [
	  cosRot * scale,
	  sinRot * scale,
	  0,
	  -sinRot * scale,
	  cosRot * scale ,
	  0,
	  positionX,
	  positionY,
	  1,
	];
  
	return transformationMatrix;
  }

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform(trans1, trans2) {
	const result = Array(9).fill(0);
  
	for (let i = 0; i < 3; i++) {
	  for (let j = 0; j < 3; j++) {
		for (let k = 0; k < 3; k++) {
		  result[i * 3 + j] += trans1[i * 3 + k] * trans2[k * 3 + j];
		}
	  }
	}
  
	return result;
  }


