import { useGetVideosQuery } from '../../features/videos/videosApi'
import Video from './Video'
import VideoLoader from '../ui/loaders/VideoLoader';
import Error from '../ui/Error'
import {useSelector} from 'react-redux';

const Videos = () => {
  const {tags, searchTerm} = useSelector(state => state.searchAndFilter)
  const {data: videos, isLoading, isError} = useGetVideosQuery({tags, searchTerm});

  //decide what to render
  let content;
  if(isLoading) {
    content = (
    <>
      <VideoLoader/>
      <VideoLoader/>
      <VideoLoader/>
      <VideoLoader/>
      <VideoLoader/>
      <VideoLoader/>
      <VideoLoader/>
      <VideoLoader/>
    </>
  )
  }
  if(!isLoading && isError) {
    console.log(isError)
    content = <Error message='There was An error ocurred'/>
  }
  if(!isLoading && !isError && videos?.length === 0) {
    content = <Error message={'No video was found🎃'}/>
  }
  if(!isLoading && !isError && videos?.length > 0) {
    content = videos.map(item => <Video key={item.id} video={item}/>)
  }

  return content;
}

export default Videos