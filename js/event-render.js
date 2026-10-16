// Create an event with an HTML template in a js template string

var keepintouch = `
<div class="column events-list__item" style="background-color: #EEEEEE; border-radius: 30px; padding:30px;">
                <!-- <div class="media-wrap event-thumb">
                        <img src="images/thumbs/events/event-1000.jpg" 
                          srcset="images/thumbs/events/event-2000.jpg 2000w, 
                                  images/thumbs/events/event-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt="">
                </div> end media-wrap -->
                <h3 class="display-1 events-list__item-title">
                    <a href="#" title="">New Events Coming Soon!</a>
                </h3>
                <p>
                    Follow us on Instagram and Facebook to keep up with the latest!
                </p>
                <div class="s-social" style="border-radius: 15px; background-color: #3b0d11;">
                <ul class="social-list">
                    <li class="social-list__item">
                        <a href="https://www.facebook.com/lifeofvictory/" target="_blank" title="">
                            <span class="social-list__icon social-list__icon--facebook"></span>
                            <span class="social-list__text">Facebook</span>
                        </a>
                    </li>
                    <li class="social-list__item">
                        <a href="https://www.instagram.com/lifeofvictorychurch/" target="_blank" title="">
                            <span class="social-list__icon social-list__icon--instagram"></span>
                            <span class="social-list__text">Instagram</span>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
`

// loop through each event in db:
function generateEventElements (eventsdb) {
    // Sort eventsdb and for each, check that the event has passed
    eventsdb.sort((a,b) => { a.start - b.start }).forEach(event => {
        // compare if the value of event start date is larger (larger number means future) than current date
        if ( event.start > Date() ) {
            // if eval is true, append res of func to dom
            document.getElementsByClassName('events-list')[0].innerHTML += genEventItem(event)
        } else {
            document.getElementsByClassName('events-list')[0].innerHTML = keepintouch
        }
    });
}

// function genEventItem (title, URL, shortDescription, location, media) {
function genEventItem (event) {
    if (event.media.type === "video") {
        var mediaContainer = `
            <video autoplay muted loop alt="${event.media.altText}">
                <source
                    src="${event.media.source2000}",
                    type="video/mp4"
                >
                <source
                    src="${event.media.source1000}",
                    type="video/mp4"
                >
                <source
                    src="${event.media.source500}",
                    type="video/mp4"
                >
                Your browser does not support the video tag.
            </video>
        `
    } else {
        var mediaContainer = `
            <img src="${event.media.source2000}"
                srcset="
                    ${event.media.source1000} 2000w, 
                    ${event.media.source500} 500w" 
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt="${event.media.altText}"></img>
                `
    }
    let eventMiniCard =
            `
            <div class="column events-list__item">
                <div class="media-wrap event-thumb">
                    ${mediaContainer}
                </div>
                <div class="column events-list__item">
                    <h3 class="display-1 events-list__item-title">
                        <a onclick="openModal('${event.URL()}')" title="">${event.title}</a>
                    </h3>
                    <p>
                    ${event.shortDescription}
                    </p>
                    <ul class="events-list__meta">
                        <li class="events-list__meta-date">${event.date()}</li>
                        <li class="events-list__meta-time">${event.time()}</li>
                        <li class="events-list__meta-location">${event.location}</li>
                    </ul>
                </div
            </div>
            `
    return eventMiniCard
}