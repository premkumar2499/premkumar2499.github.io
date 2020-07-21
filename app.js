const navdown = ()=>{
    let hamburg = document.querySelector('.collapse-nav');
    let cross = document.querySelector('.cross');
    let brand_info_mob = document.querySelector('.brand-info-mob');
    hamburg.addEventListener('click',function(){
        brand_info_mob.classList.toggle('active');
        hamburg.classList.toggle('inactive');
    });
    cross.addEventListener('click',function(){
        brand_info_mob.classList.toggle('active');
        hamburg.classList.toggle('inactive');
    })
}
navdown();