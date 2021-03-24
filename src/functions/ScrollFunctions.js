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
  const footer = document.getElementById("footerBox")

  if (element && footer){
    // Account for the footer height.
    // This means that if you have 3 rows, 
      // 0% would be at the top of second
      // 33% would be at the top of second
      // 66% would be at the top of third

    return element.scrollTop / (element.scrollHeight - footer.scrollHeight);
  } else {
    return 0;
  }
}

