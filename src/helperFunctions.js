export function characterCountdown() {

}

export function checkIfEmpty(post) {

  if (post === '' || post.lenth === 0) {
    return false;
  } else {
    return true;
  }

}

export function dateSort(dates) {

  let sorted = dates.sort((a, b) => {
    return new Date(a.postedOn).getTime() - new Date(b.postedOn).getTime()
  }).reverse();

  return sorted;

}
