import {useDispatch, useSelector} from 'react-redux';
import {selectTag, removeTag} from '../../features/searchAndFilter/searchAndFilterSlice';

export default function Tag({title}) {
    //   "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
    //   "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
    const dispatch = useDispatch(); 
    const selectedTags = useSelector(state => state.searchAndFilter.tags);
    const isSelect = selectedTags.includes(title) ? true : false;

    const handleSelect = (title) => {
      if(isSelect) {
        dispatch(removeTag(title))
      } 
      else {
        dispatch(selectTag(title))
      }
    }

    const style =  isSelect ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'

      return (
        <div
        onClick={() => handleSelect(title)}
          className={style}
        >
          {title}
        </div>
      );
    }
    