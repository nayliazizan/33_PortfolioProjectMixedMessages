//nayli azizan, portfolio project mixed msgs for codecademy

function generateCaption() {
    const places = ["beach", "coffee shop", "concert", "gym", "museum", "park", "party", "restaurant", "road trip"];
    const activities = ["chillin'", "dancing", "eating", "exploring", "feeling myself", "getting lit", "hanging out", "laughing", "relaxing", "shopping", "singing", "studying", "working out"];
    const feelings = ["amazing", "blessed", "bored", "excited", "grateful", "happy", "hungry", "productive", "stressed", "tired"];
    const hashtags = ["#instagood", "#life", "#nofilter", "#photooftheday", "#squadgoals", "#blessed", "#yolo"];
  
    // pick a random element from each list
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const randomFeeling = feelings[Math.floor(Math.random() * feelings.length)];
    const randomHashtag = hashtags[Math.floor(Math.random() * hashtags.length)];
  
    // combine elements into a caption
    const caption = `Currently ${randomActivity} at ${randomPlace} feeling ${randomFeeling}! ${randomHashtag}`;
    return caption;
  }
  
console.log(generateCaption());