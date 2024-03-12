
function Page({title, description, content}) {

   /*  const fakeProps = {
        title: "Some title",
        description: "Lorem ipsum description"
    }

    /* const title = fakeProps.title;
    const description = fakeProps.description; */
    /* const {title, description} = fakeProps; */ // destructuring components */

    return(
        <>
            <h2>THIS IS A PAGE COMPONENT</h2>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{content}</p>
        </>
        
    )
}

export {Page};