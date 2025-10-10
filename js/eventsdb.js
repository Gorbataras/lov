const eventsdb = [
    {
        title: "Yard Sale",
        URL: function() { return this.title.split(' ').join('-').toLowerCase() },
        shortDescription: `
        Our Yard Sale was a great success and we were really happy to meet some of our neighbors!
        `,
        longDescription: "",
        occurrence: {
            date: "Sat Sept 27th",
            time: "12:00 PM - 3:00 PM"
        },
        location: "17418 108th Ave SE Renton, WA",
        media: {
            type: "video",
            source2000: "https://f004.backblazeb2.com/file/lov-static-hosting/media/videos/YardSale2025_2.39x1-480.mp4",
            source1000: "https://f004.backblazeb2.com/file/lov-static-hosting/media/videos/YardSale2025_2.39x1-480.mp4",
            source500: "https://f004.backblazeb2.com/file/lov-static-hosting/media/videos/YardSale2025_2.39x1-480.mp4",
            altText: ""
        }
    },
    {
        title: "School Supply Donation Drive",
        URL: function() { return this.title.split(' ').join('-').toLowerCase() },
        shortDescription: `
                    Donate new School Supplies to our neighbors who may be in need based the Renton School District recommended supplies list: <a href="https://www.rentonschools.us/learning-and-teaching/elementary-education/school-supplies"><u>HERE</u></a>
                    Please donate by August 17th, as the distribution will happen soon after.
                    Drop off your donations in the church lobby during our service times.
        `,
        longDescription: `
                    `,
        occurrence: {
            date: "Until August 17th 2025",
            time: "10:00am to 1:30pm Sundays, 7:00pm to 9:00pm Wednesdays"
        },
        location: "17418 108th Ave SE Renton, WA",
        media: {
            type: "image",
            source2000: "images/thumbs/events/event-2000.jpg",
            source1000: "images/thumbs/events/event-1000.jpg",
            source500: "images/thumbs/events/event-500.jpg",
            altText: "An image depicting: ..."
        }
    },
    {
        title: "School Supply Community Hand-Out",
        URL: function() { return this.title.split(' ').join('-').toLowerCase() },
        shortDescription: `
                            Come to our church on 23rd Aug. to pick up free school supplies to help your student start the school year strong!
                            <em>This event is on a first-come-first-served basis while supplies last!
                        Children <strong>must</strong> be present to recieve supplies.
                    </em>
                    `,
        longDescription: "",
        occurrence: {
            date: "August 23rd 2025",
            time: "12:00pm to 3:00pm"
        },
        location: "17418 108th Ave SE Renton, WA",
        media: {
            type: "image",
            source2000: "images/thumbs/events/event-2000.jpg",
            source1000: "images/thumbs/events/event-1000.jpg",
            source500: "images/thumbs/events/event-500.jpg",
            altText: "An image depicting: ..."
        }
    },
    {
        title: "Candlelight service",
        URL: function() { return this.title.split(' ').join('-').toLowerCase() },
        shortDescription: `
         We invite you, and encourage you to come to our Candlelight Service. Service will be centered around
                    the
                    greatness and the importance of Jesus' birth and His mission. The service will include
                    worship, sermon, caroling, and candlelighting. Come early for free coffee cart coffee.
                    `,
        longDescription: "",
        occurrence: {
            date: "Thursday, December 18, 2024",
            time: "7:00PM - 9:00PM"
        },
        location: "17418 108th Ave SE Renton, WA",
        media: {
            type: "image",
            source2000: "images/thumbs/events/event-2000.jpg",
            source1000: "images/thumbs/events/event-1000.jpg",
            source500: "images/thumbs/events/event-500.jpg",
            altText: "An image depicting: ..."
        }
    }
]