(() => {
    const waypoints = $('.lead__svg-waypoint');
    const towns = $('.lead__svg-city');
    // point - 'координата' точки с городом
    // каждый обьект содержит в себе point,
    // 3 svg path, которые нужно проявить, когда основная линия пройдет через point
    // флаг isVisible, чтобы функция не запускала анимации у path, которые уже видны 
    const breakpoints = [
        {point: 1390, element: [towns[0], waypoints[0], waypoints[1]], isVisible: false},
        {point: 1529, element: [towns[1], waypoints[2], waypoints[3]], isVisible: false},
        {point: 1702, element: [towns[2], waypoints[4], waypoints[5]], isVisible: false},
        {point: 1771, element: [towns[3], waypoints[6], waypoints[7]], isVisible: false},
        {point: 1904, element: [towns[4], waypoints[8], waypoints[9]], isVisible: false},
        {point: 1994, element: [towns[5], waypoints[10], waypoints[11]], isVisible: false},
        {point: 2224, element: [towns[6], waypoints[12], waypoints[13]], isVisible: false},
        {point: 2293.5, element: [towns[7], waypoints[14], waypoints[15]], isVisible: false},
        {point: 2363, element: [towns[8], waypoints[16], waypoints[17]], isVisible: false},
        {point: 2502, element: [towns[9], waypoints[18], waypoints[19]], isVisible: false},
        {point: 2689.5, element: [towns[10], waypoints[20], waypoints[21]], isVisible: false},
        {point: 2760, element: [towns[11], waypoints[22], waypoints[23]], isVisible: false}
    ]
    
    const way = $('.lead__svg-way');
    way.animate({
        strokeDashoffset: 2780
    },
    {
        // каждый раз, когда анимейт 
        // изменяет значение strokeDashoffset у svg линии,
        // запускается код в progress
        progress: () => {
            const currentLength = $('.lead__svg-way').css('stroke-dashoffset').slice(0, 4);
            animatePoints(breakpoints, currentLength)
        },
        duration: 20000,
        easing: 'linear'
    });
    //функция принимает в качестве парраметров массив с точками и длину линии
    function animatePoints(breakpoints, lineLength){
        breakpoints.forEach(item => {
            //если точку уже видно, ее не нужно проверять, цикл идет дальше 
            if(item.isVisible) return;
            
            //Перебирает массив, если линия уже прошла через точку, 
            //нужно показать все три path в этом месте
            if(item.point <= lineLength){
                item.element.forEach(item => $(item).animate({opacity: 1}, 500, 'linear'))
                item.isVisible = true;
            }
        });
    }
})();