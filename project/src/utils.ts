const getElementCenter = (element:) => {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return { centerX, centerY };
};

const getMouseAngle = (event:MouseEvent, element) => {
  const { centerX, centerY } = getElementCenter(element);
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  const angleInRadians = Math.atan2(deltaY, deltaX);
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  return angleInDegrees;
};
