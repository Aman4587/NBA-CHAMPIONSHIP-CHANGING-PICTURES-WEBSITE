var showing = false 
document.querySelector("img").style.display = "none"
List_urls=["https://imageio.forbes.com/specials-images/imageserve//62ac102b0d9827d0850c43fc/0x0.jpg?format=jpg&crop=2691,1514,x0,y60,safe&width=1200","https://s7d2.scene7.com/is/image/TWCNews/ap21202151548723","https://www.usatoday.com/gcdn/presto/2020/10/15/USAT/a82a2c5c-21b2-4cf6-a552-e58f6209a4e4-2020-10-14_Lakers.jpg?crop=5471,3077,x0,y109&width=3200&height=1800&format=pjpg&auto=webp","https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-08/2019-nba-champions-the-toronto-raptors_b1rypj3cw2z11vssv0l0xlft3.jpeg?itok=yDbPUZLQ","https://andscape.com/wp-content/uploads/2018/06/970194364_25471747-e1528548143165.jpg?w=700","https://library.sportingnews.com/styles/facebook_1200x630/s3/2021-08/2010-nba-champions-the-los-angeles-lakers_1si3ty2iqay871j6k7vc4muirx.jpeg?itok=twonlmLF","https://m.media-amazon.com/images/M/MV5BNTZkNjNiMjYtZTA5Mi00MWE2LTg1N2EtZTJiMGE3YTUwZWRlXkEyXkFqcGdeQXVyNTgwNzg3MzY@._V1_.jpg"]
function show_team (){
    document.querySelector("img").style.display = "block"
    showing = true
    c = List_urls [Math.floor(Math.random()*List_urls.length)]
    document.querySelector("img").src = c
}
function hide_team(){
    document.querySelector("img").style.display = "none"
    showing = false
}
function bt() {
    if (showing == true){
        hide_team()
    }
    else{
        show_team()
    }
}