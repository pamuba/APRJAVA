import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  selectedVideo : Video;
  public hidenewVideo: boolean = true;
  videos:Video[] = []

  constructor(private _videoService:VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
      .subscribe(res => {
        for(const d of (res as any)){
          this.videos.push(d)
        }
      })
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo)
  }
  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      })
  }

  onUpdateVideoEvent(video:any){
    this._videoService.updateVideo(video)
      .subscribe(resUpadatedVideo => video = resUpadatedVideo);
    
    this.selectedVideo = null;
  }

  newVideo(){
    this.hidenewVideo = false;
  }

}
