export const getScrollPosition = () => {

  const element = document.getElementsByClassName("scrollBox")[0]

  if (element){
    return element.scrollTop;
  } else {
    return 0;
  }
}

export const getScrollPercentage = () => {

  const element = document.getElementsByClassName("scrollBox")[0]

  if (element){
    return element.scrollTop / element.scrollHeight;
  } else {
    return 0;
  }
}

