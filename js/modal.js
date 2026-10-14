var modalEl = document.getElementById("event-modal")

function openModal(id) {
    // initialize var, on error it will be blank
    let eventModal
    // console.log("check event id: "+id)
    // console.log(JSON.stringify(eventsdb.filter( events => events.URL() === id)))
    try {
        eventModal = eventsdb.filter( events => events.URL() === id)
        modalEl.innerHTML = genEventModal(eventModal[0])
    } catch (error) {
        console.log("unable to fetch event Item")        
        // console.log("event: "+JSON.stringify(eventModal))
    }
    modalEl.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalEl) {
        modalEl.style.display = "none";
    }
}

function genEventModal(event) {
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
            // <div id="event-modal" class="alert-box">
            // </div>
    let eventModalContent =
            `
                <span class="alert-box__close">&times;</span>
                <div id="event-modal__content" class="column events-list__item">
                    ${mediaContainer}
                </div>
                <div class="column events-list__item">
                    <h3 class="display-1 events-list__item-title">
                        ${event.title}
                    </h3>
                    <p>
                    ${event.shortDescription}
                    </p>
                    <ul class="events-list__meta">
                        <li class="events-list__meta-date">${event.occurrence.date}</li>
                        <li class="events-list__meta-time">${event.occurrence.time}</li>
                        <li class="events-list__meta-location">${event.location}</li>
                    </ul>
                </div
            `
    return eventModalContent
}