const converters = {
    timeTransform : function (timeUnix){
        let time = timeUnix*1000;

        //const hours = new Date(time).getHours();
        const hours = String(new Date(time).getHours()).padStart(2, '0');
        //const minutes = new Date(time).getMinutes();
        //const minutes = String(new Date(time).getMinutes()).padStart(2, '0')

        const minutes = new Date(time).getMinutes() <= 9 ? '0'+new Date(time).getMinutes() : new Date(time).getMinutes();
       // String(date.getMinutes()).padStart(2, '0');

        return (`${hours}:${minutes}`);
    },
    dateTransform : function (unixTime){
        const date = new Date(unixTime * 1000);
        const month = date.toLocaleString('en-US', {month: "short"});
        const day = new Date(date).getDate();

        return (`${day} ${month}`);
    }
}

export const timeTransform = converters.timeTransform;
export const dateTransform = converters.dateTransform;
