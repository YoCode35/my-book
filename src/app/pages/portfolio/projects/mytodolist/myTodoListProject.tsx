import ProjectCard from "../../../../../components/projects/ProjectsCard";
import DotsRectangle from "../../../../../components/dots/DotsRectangle";

const MyTodoListProject = () => {
  return (
    <section className="section-container">
      <ProjectCard
        title="MyTodoList"
        date="Octobre 2024"
        technologies="Flutter & MySQL"
        imageUrl="/img/mytodolist/ref_mytodolist.png"
        imageAlt="Image de mon projet d'application MyTodoList"
        projectLink="https://www.mytodolist.tech"
        moreInfoLink="/pages/portfolio#mytodolist"
        linkLabel="Web"
        imageWidth={789}
        imageHeight={360}
      />

      {/* DotsRectangle spécifique */}
      <div
        className=" xl:w-full sm:w-[40%] lg:w-[100%] 
                    xl:flex 
                    xl:justify-start 
                    w-full 
                    max-w-[320px] 
                    mt-8 xl:mt-10 2xl:mt-20 
                    relative 
                    mx-auto 
                    xl:ml-48 4xl:ml-[800px]"
      >
        <DotsRectangle
          className="w-full"
          rows={3}
          dotsPerRow={10}
          dotColor="#fff000"
          width="100%"
          height="45px"
        />
      </div>
    </section>
  );
};

export default MyTodoListProject;
