const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const axios = require('axios')
const request = require('request')
const app = express();
const cors= require('cors')
var ejs=require('ejs')
var apikey="d1f3a3e0c1f3479de748de8c812906a9"
// view engine setup
app.use(cors())
app.get('/picinfo',(req,res)=>{
  var url="https://api.themoviedb.org/3/movie/now_playing?api_key="+apikey+"&language=en-US&page=1"
  axios.get(url).then(response=>{
      var counter=0
      var result=[]
      var i=0
      while (counter<5){
          if(response.data.results[i].backdrop_path&&response.data.results[i].backdrop_path!=""){
             result.push(response.data.results[i])
              counter++
          }
          i++
      }
      res.json({"results":result})}).catch(error=>{console.log(error)})
})
app.get('/Trending_movie',(req,res)=>{
var url="https://api.themoviedb.org/3/trending/movie/day?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].title,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        res.json({"results":results,"resultsforphone":resultForphone})}).catch(error=>{console.log(error)})
})
app.get('/Trending_tv',(req,res)=>{
var url="https://api.themoviedb.org/3/trending/tv/day?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var resultForphone=[]
        var line=0
        var counter=0
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].name,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)
        }
        res.json({"results":results,"resultsforphone":resultForphone})}).catch(error=>{console.log(error)})
})
app.get('/Toprated_movie',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/top_rated?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].title,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        res.json({"results":results,"resultsforphone":resultForphone})}).catch(error=>{console.log(error)})
})
app.get('/Toprated_tv',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/top_rated?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].name,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        res.json({"results":results,"resultsforphone":resultForphone})}).catch(error=>{console.log(error)})
})
app.get('/popular_movie',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].title,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        res.json({"results":results,"resultsforphone":resultForphone})}).catch(error=>{console.log(error)})
})
app.get('/popular_tv',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/popular?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].name,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        res.json({"results":results,"resultsforphone":resultForphone})}).catch(error=>{console.log(error)})
})
app.get('/recommend_movie/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/"+req.params.id+"/recommendations?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].title,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        if( resultForphone.length ===0){res.json(null)}
        else {res.json({"results":results,"resultsforphone":resultForphone})}}).catch(error=>{console.log(error)})
})
app.get('/similar_movie/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/"+req.params.id+"/similar?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].title,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        if( resultForphone.length ===0){res.json(null)}
        else {res.json({"results":results,"resultsforphone":resultForphone})}
        }).catch(error=>{console.log(error)})
})
app.get('/recommend_tv/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/"+req.params.id+"/recommendations?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].name,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        if( resultForphone.length ===0){res.json(null)}
        else {res.json({"results":results,"resultsforphone":resultForphone})}}).catch(error=>{console.log(error)})
})
app.get('/similar_tv/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/"+req.params.id+"/similar?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results=[]
        var result=[]
        var line=0
        var counter=0
        var resultForphone=[]
        while (counter<response.data.results.length){
            result=[]
            for(var i=0;i<6;i++){
                 if(!response.data.results[counter].poster_path)
                {   i-=1;
                     counter++
                    continue}
                var tem ={
                    id:response.data.results[counter].id,
                    poster_path:response.data.results[counter].poster_path,
                    title:response.data.results[counter].name,
                }
                result.push(tem)
                resultForphone.push(tem)
                counter++
                if(counter==response.data.results.length){break}
            }
            results.push(result)

        }
        if( resultForphone.length ===0){res.json(null)}
        else {res.json({"results":results,"resultsforphone":resultForphone})}}).catch(error=>{console.log(error)})
})
app.get('/movie/video/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/"+req.params.id+"/videos?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var last="tzkWB85ULJY";
        var type;
        var length=response.data.results.length;
        for (var i=0;i<length;i++){
            if(response.data.results[i].type === "Trailer"){
                last=response.data.results[i].key;
                type=response.data.results[i].type;
                break
            }
            else if(response.data.results[i].type === "Teaser"){
                last=response.data.results[i].key;
                type=response.data.results[i].type;
            }
        }
        res.json({"videoId":last,"type":type})}).catch(error=>{console.log(error)})
})
app.get('/tv/video/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/"+req.params.id+"/videos?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var last="tzkWB85ULJY";
        var type;
        var length=response.data.results.length;
        for (var i=0;i<length;i++){
            if(response.data.results[i].type === "Trailer"){
                last=response.data.results[i].key;
                type=response.data.results[i].type;
                break
            }
            else if(response.data.results[i].type === "Teaser"){
                last=response.data.results[i].key;
                type=response.data.results[i].type;
            }
        }
        res.json({"videoId":last,"type":type})}).catch(error=>{console.log(error)})
})
app.get('/tv/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/"+req.params.id+"?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var id=response.data.id;
        var title=response.data.name;
        var genres=""
        var spoken_languages=""
        var release_date=response.data.first_air_date.substring(0,4);
        var runtime="";
        var overview=response.data.overview;
        var vote_average=response.data.vote_average;
        var tagline=response.data.tagline;
        response.data.genres.forEach(function (item, idnex, array){genres+=item.name+","})
        if(genres!==""){genres.slice(0,-1)}
        response.data.spoken_languages.forEach(function (item, idnex, array){spoken_languages+=item.english_name+","});
        if(spoken_languages!==""){spoken_languages.slice(0,-1)}
        if(response.data.episode_run_time[0]>=60){
            var hour=parseInt(String(response.data.episode_run_time[0]/60))
            runtime+=hour.toString()+"hr"
            if(hour>1){runtime+="s"}
            runtime+=" "
        }
        if(response.data.episode_run_time[0]%60>0){
            var min=response.data.episode_run_time[0]%60;
            runtime+=min.toString()+"min"
            if(min>1){runtime+="s"}
            runtime+=" "
        }
        res.json({
            "id":id,
            "title":title,
            "genres":genres,
            "spoken_language":spoken_languages,
            "release_date":release_date,
            "runtime":runtime,
            "overview":overview,
            "poster_path":response.data.poster_path,
            "vote_average":vote_average,
            "tagline":tagline,
        })}).catch(error=>{console.log(error)})
})
app.get('/movie/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/"+req.params.id+"?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var id=response.data.id;
        var title=response.data.title;
        var genres=""
        var spoken_languages=""
        var release_date=response.data.release_date.substring(0,4);
        var runtime=""
        var overview=response.data.overview;
        var vote_average=response.data.vote_average;
        var tagline=response.data.tagline;
        var poster_path=response.data.poster_path;
        response.data.genres.forEach(function (item, idnex, array){genres+=item.name+","})
        if(genres!==""){genres.slice(0,-1)}
        response.data.spoken_languages.forEach(function (item, idnex, array){spoken_languages+=item.english_name+","});
        if(spoken_languages!==""){spoken_languages.slice(0,-1)}
        if(response.data.runtime>=60){
            var hour=parseInt(String(response.data.runtime/60))
            runtime+=hour.toString()+"hr"
            if(hour>1){runtime+="s"}
            runtime+=" "
        }
        if(response.data.runtime%60>0){
            var min=response.data.runtime%60;
            runtime+=min.toString()+"min"
            if(min>1){runtime+="s"}
            runtime+=" "
        }
        res.json({
            "id":id,
            "title":title,
            "genres":genres,
            "spoken_language":spoken_languages,
            "release_date":release_date,
            "runtime":runtime,
            "overview":overview,
            "vote_average":vote_average,
            "tagline":tagline,
            "poster_path":poster_path,
        })}).catch(error=>{console.log(error)})
})
app.get('/castlist/movie/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/"+req.params.id+"/credits?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{res.json({"cast":response.data.cast})}).catch(error=>{console.log(error)})
})
app.get('/castlist/tv/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/"+req.params.id+"/credits?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{res.json({"cast":response.data.cast})}).catch(error=>{console.log(error)})
})
app.get('/cast/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/person/"+req.params.id+"?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{res.json(response.data)}).catch(error=>{console.log(error)})
})
app.get('/cast/social/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/person/"+req.params.id+"/external_ids?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var id =req.params.id
        var imdb_id = response.data.imdb_id;
        var facebook_id;
        var instagram_id;
        var twitter_id;
        if(response.data.facebook_id && response.data.facebook_id !==""){facebook_id=response.data.facebook_id;}
        else{facebook_id=false;}
        if(response.data.instagram_id && response.data.instagram_id !==""){instagram_id=response.data.instagram_id;}
        else{instagram_id=false;}
        if(response.data.twitter_id && response.data.twitter_id !==""){twitter_id=response.data.twitter_id;}
        else{twitter_id=false;}
        res.json({

            "id":id,
            "imdb":imdb_id,
            "fb":facebook_id,
            "ins":instagram_id,
            "tw":twitter_id
        })}).catch(error=>{console.log(error)})
})
app.get('/movie/reviews/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/movie/"+req.params.id+"/reviews?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results;
        var resu=[];
        if(response.data.results.length>10){
            results=response.data.results.slice(0,10);
        }
        else{
            results=response.data.results;
        }//2020-12-23T15:36:37.849Z
        for(var i in results){
            var info={};
            info['author']=results[i].author;
            info['content']=results[i].content;
            var time=results[i].created_at;
            switch (time.slice(5,7)){
                case "01":
                    info['created_at']='January '+time.slice(8,10)+', '+time.slice(0,4)+'. ';
                    break
                case "02":
                    info['created_at']='February '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "03":
                    info['created_at']='March '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "04":
                    info['created_at']='April '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "05":
                    info['created_at']='May '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "06":
                    info['created_at']='June '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "07":
                    info['created_at']='July '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "08":
                    info['created_at']='August '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "09":
                    info['created_at']='September '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "10":
                    info['created_at']='October '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "11":
                    info['created_at']='November '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "12":
                    info['created_at']='December '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
            }
            if(parseInt(time.slice(11,13))>12){
                info['created_at']+=(parseInt(time.slice(11,13))%12).toString()+time.slice(13,19)+" PM";
            }
            else if(parseInt(time.slice(11,13))===12){
                info['created_at']+=time.slice(13,19)+" PM";
            }
            else if(parseInt(time.slice(11,13))===11&&parseInt(time.slice(11,13))===10){
                info['created_at']+=time.slice(11,19)+" AM";
            }
            else{
                info['created_at']+=time.slice(12,19)+" AM";
            }
            info['url']=results[i].url;
            info['rating']=results[i].author_details.rating;
            info['avatar_path']=results[i].author_details.avatar_path;
            resu.push(info)
        }
        res.json({"reviews":resu})}).catch(error=>{console.log(error)})
})
app.get('/tv/reviews/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/tv/"+req.params.id+"/reviews?api_key="+apikey+"&language=en-US&page=1"
    axios.get(url).then(response=>{
        var results;
        var resu=[];
        if(response.data.results.length>10){
            results=response.data.results.slice(0,10);
        }
        else{
            results=response.data.results;
        }//2020-12-23T15:36:37.849Z
        for(var i in results){
            var info={};
            info['author']=results[i].author;
            info['content']=results[i].content;
            var time=results[i].created_at;
            switch (time.slice(5,7)){
                case "01":
                    info['created_at']='January '+time.slice(8,10)+', '+time.slice(0,4)+'. ';
                    break
                case "02":
                    info['created_at']='February '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "03":
                    info['created_at']='March '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "04":
                    info['created_at']='April '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "05":
                    info['created_at']='May '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "06":
                    info['created_at']='June '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "07":
                    info['created_at']='July '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "08":
                    info['created_at']='August '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "09":
                    info['created_at']='September '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "10":
                    info['created_at']='October '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "11":
                    info['created_at']='November '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
                case "12":
                    info['created_at']='December '+time.slice(8,10)+', '+time.slice(0,4)+'. '
                    break
            }
            if(parseInt(time.slice(11,13))>12){
                info['created_at']+=(parseInt(time.slice(11,13))%12).toString()+time.slice(13,19)+" PM";
            }
            else if(parseInt(time.slice(11,13))===12){
                info['created_at']+=time.slice(13,19)+" PM";
            }
            else if(parseInt(time.slice(11,13))===11&&parseInt(time.slice(11,13))===10){
                info['created_at']+=time.slice(11,19)+" AM";
            }
            else{
                info['created_at']+=time.slice(12,19)+" AM";
            }
            info['url']=results[i].url;
            info['rating']=results[i].author_details.rating;
            info['avatar_path']=results[i].author_details.avatar_path;
            resu.push(info)
        }
        res.json({"reviews":resu})}).catch(error=>{console.log(error)})
})
app.get('/search/:id',(req,res)=>{
var url="https://api.themoviedb.org/3/search/multi?api_key="+apikey+"&language=en-US&query="+req.params.id
    axios.get(url).then(response=>{
        var counter=0
        var results=[];
        var i=0;
        while (counter<7 && counter<response.data.results.length){
            if(response.data.results[i].backdrop_path&&response.data.results[i].poster_path){
            var reuslt={
                id:response.data.results[i].id,
                backdrop_path:response.data.results[i].backdrop_path,
                media_type:response.data.results[i].media_type,
                poster_path:response.data.results[i].poster_path
            }
            if(reuslt['media_type'] === 'movie'){
                reuslt['title']=response.data.results[i].title
            }
            else {
                reuslt['title']=response.data.results[i].name
            }
            results.push(reuslt)
            counter++}
            i++;
        }
        res.json(results)}).catch(error=>{console.log(error)})
})
app.get('/demo',(req,res)=>{
var url=""
    axios.get(url).then(response=>{res.json(response.data)}).catch(error=>{console.log(error)})
})

app.get('/detail',(req,res)=>{
var url="https://api.themoviedb.org/3/search/multi?api_key="+apikey+"&language=en-US&query=game"
    axios.get(url).then(response=>{res.json(response.data)}).catch(error=>{console.log(error)})
})
app.get('/',(req,res) => res.send('welcome'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
module.exports = app;
