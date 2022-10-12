import { useGetTagsQuery } from "../../features/tags/tagsApi";
import Tag from "./Tag";
import TagLoader from '../ui/loaders/TagLoader';

export default function Tags() {
  const {data: tags, isLoading, isError} = useGetTagsQuery();

  //decide what to render 
  let content;
  if(isLoading) {
    content = (
      <>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
        <TagLoader/>
      </>
    )
  }
  if(!isLoading && isError) {
    content = <Error message="something went wrong" />
  }
  if(!isLoading && !isError && tags?.length === 0) {
    content = <Error message="no tags found🧨" />
  }
  if(!isLoading && !isError && tags?.length > 0) {
    content = tags.map(tag => <Tag key={tag.id} title={tag.title} />)
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-7 mb-6 lg:px-0 flex flex-wrap gap-2 border-b ">
        {content}
      </div>
    </section>
  );
}
