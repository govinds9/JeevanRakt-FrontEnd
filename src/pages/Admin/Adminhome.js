import React from "react";
import Layout from "../../componants/share/Layout";
import { useSelector } from "react-redux";

function Adminhome() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container">
        <div className="flex">
          <h1 className=" text-center ">
            Welcome Admin <i className=" text-success "> {user?.name}</i>
          </h1>
          <h3>Manage Jeevanrakt App</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius ea
            esse provident repellendus nam tempore ipsa maiores cupiditate!
            Ratione explicabo exercitationem tempore nobis quia quibusdam vero
            quod quam ab ut, libero harum porro, suscipit, illo aut. Dicta rerum
            ducimus neque placeat unde reprehenderit adipisci nam dolorum minus
            voluptatum tempore repellendus nesciunt debitis facere quam
            aspernatur libero doloribus consequatur obcaecati laboriosam fugit
            nulla, architecto error! Nobis, iste, tempora incidunt rem, impedit
            cum consequuntur quibusdam obcaecati corporis fugiat ullam vel ab
            praesentium quia? Provident magnam quasi mollitia officia voluptas
            temporibus odio accusamus nam eum est! Tenetur possimus tempore
            optio quam enim culpa iusto quasi molestias atque repellendus
            distinctio accusamus dolorem officia, reiciendis officiis
            consectetur nulla eveniet et amet, doloremque est ducimus minus.
            Recusandae perspiciatis maiores numquam facere tempore fuga
            necessitatibus error doloremque iusto, libero, sed molestiae
            molestias voluptatibus doloribus itaque et corrupti quidem alias
            ducimus. Iure officia, nihil id fugit velit, hic ullam iusto placeat
            unde assumenda eaque possimus culpa? Adipisci rem dignissimos
            dolorum odio, a dolore nesciunt modi sunt porro similique illo nulla
            nobis consequatur cupiditate. A, delectus sit libero enim illo
            consequuntur id laboriosam aspernatur rem sequi deleniti impedit
            quis rerum, repudiandae in perferendis velit, blanditiis officia nam
            tempora?
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Adminhome;
