interface activity {
    title: string,
    description?: string,
    code?: number,
    activities?: activity[]
}

const defaultActivities: activity[] = [
    {title: 'Video Games', activities: [{title: 'Rocket League'},{title: 'Apex'},{title: 'Dead By Daylight'},{title: 'Minecraft'}]},
    {title: 'Watch Something'},
    {title: 'Create Something'},
    {title: 'Clean/Chore'},
    {title: 'Organize'},
    {title: 'Learn Something'},
    {title: 'Massage'},
    {title: 'Interact With Leo'},
    {title: 'Emotional Check In'},
    {title: 'FUN Coding'},
    {title: 'Find New Hobby'},
    {title: 'Plan a Date'},
    {title: 'Cook/Bake Something'},
    {title: 'Update Budget Sheet'},
    {title: 'Interact on a Stream'},
    {title: 'Wander on Phone/Internet'},
    {title: 'Sit Outside'},
    {title: 'Read Something'},
    {title: 'Make Money'},
    {title: 'Work Out'}
];

export default function getActivities() {
    return defaultActivities;
}
