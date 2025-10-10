// Create an event with an HTML template in a js template string

// loop through each event in db:
function generateEventElements (eventsdb) {
    eventsdb.forEach(event => {
        document.getElementsByClassName('events-list')[0].innerHTML += genEventItem(event)
    });
}

// Is this a past event or an upcoming event?

function checkIfEventHasOccurred (occurrence) {
    // get current time and date
}

// function genEventItem (title, URL, shortDescription, occurrence, location, media) {
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
                <h3 class="display-1 events-list__item-title">
                    <a href="events/${event.URL()}" title="">${event.title}</a>
                </h3>
                <p>
                ${event.shortDescription}
                </p>
                <ul class="events-list__meta">
                    <li class="events-list__meta-date">${event.occurrence.date}</li>
                    <li class="events-list__meta-time">${event.occurrence.time}</li>
                    <li class="events-list__meta-location">${event.location}</li>
                </ul>
            </div>
            `
    return eventMiniCard
}

// generateEventElements(eventsdb);