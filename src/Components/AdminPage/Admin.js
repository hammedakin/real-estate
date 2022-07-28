import React from 'react';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import AdminAllProperty from './AdminAllProperty';
import AdminBlogEdit from './AdminBlog/AdminBlogEdit';
import BlogUpload from './AdminBlog/BlogUpload';
import AdminDashboard from './AdminDashboard';
import AdminPropertyEdit from './AdminPropertyEdit';
import PropertyUpload from './PropertyUpload';



const Admin = () => {
    const { url, path } = useRouteMatch();

    return ( 
        <>
<section>
<Switch>
                <Route path={`${path}/`}>
                    <AdminDashboard />
                </Route>
                <Route path={`${path}/admindashboard`}>
                    <AdminDashboard />
                </Route>
                <Route path={`${path}/admin/property-update`}>
                    <AdminAllProperty />
                </Route>
                <Route path={`${path}/admin/property-update/:propstoken`}>
                    <AdminPropertyEdit />
                </Route>
                <Route path={`${path}/admin/property-upload`}>
                    <PropertyUpload />
                </Route>
                <Route path={`${path}/admin/blog-upload`}>
                    <BlogUpload />
                </Route>
                <Route path={`${path}/admin/blog-update/:token`}>
                    <AdminBlogEdit />
                </Route>
                
            </Switch>


</section>

        </>
     );
}
 
export default Admin;