import React from 'react';
import image from './Image.png'
import activity from './Activity.png'
import EventCard from './cards'
import './index.css';

const eventNews = [
    {
        src: image, //image src
        activity: activity,
        title: 'News Title',
        type: 'News',
        time: '11.06.2050',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti. `,
    },
    // {
    //     src: image, //image src
    //     activity: activity,
    //     title: 'Event Title',
    //     type: 'Event',
    //     time: '12.06.2030',
    //     text: `Praesent quis viverra ligula, vel convallis 
    //     massa. Mauris eget mi sed nulla laoreet 
    //     sollicitudin vitae et lacus. Duis tempus 
    //     eleifend interdum. Aliquam aliquam 
    //     luctus commodo. Donec tempor vel nunc 
    //     at malesuada. Suspendisse potenti. `,
    // },
    // {
    //     activity: activity,
    //     src: image, //image src
    //     title: 'Event Title',
    //     type: 'Event',
    //     time: '13.06.2030',
    //     text: `Praesent quis viverra ligula, vel convallis 
    //     massa. Mauris eget mi sed nulla laoreet 
    //     sollicitudin vitae et lacus. Duis tempus 
    //     eleifend interdum. Aliquam aliquam 
    //     luctus commodo. Donec tempor vel nunc 
    //     at malesuada. Suspendisse potenti.`,
    // },
];
const eventNews2 = [
    {
        src: image, //image src
        activity: activity,
        title: 'News Title',
        type: 'News',
        time: '11.06.2040',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti. `,
    },
]


 const EventsPage = () => {
    return (
        <div className="div-events">
            <div className="root">
                {eventNews.map((item) => {
                    return (
                        <EventCard
                            src={item.src}
                            type={item.type}
                            time={item.time}
                            title={item.title}
                            text={item.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default EventsPage;