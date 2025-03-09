#[macro_use] extern crate rocket;

//utoipa for swagger
use utoipa::{OpenApi};

//for cors
//use rocket::http::Method;
//use rocket_cors::{AllowedOrigins, CorsOptions};

use rocket::launch;

mod todo;

#[launch]
fn rocket() -> _ {
    /*
    #[derive(OpenApi)]
    #[openapi(
        tags(
            (name = "User Management", description = "User management endpoints."),
            (name = "Program Management", description = "Application endpoints."),
        ),
        paths( 
            crate::user_management::session_validate_api,
            crate::user_management::user_search, 
            crate::user_management::user_info,
            crate::user_management::user_role_search_api, 
            crate::user_management::user_register, 
            crate::user_management::user_login, 
            crate::user_management::reset_password,
            crate::user_management::set_password,
            crate::user_management::user_delete, 
            crate::user_management::user_logout,
            crate::user_management::user_all,

            crate::execution::execute_program, 
            crate::execution::stop_process,
            crate::execution::add_application,
            crate::execution::update_application,
            crate::execution::remove_application,
            crate::execution::get_application,
            crate::execution::get_all_applications,
            crate::execution::add_category,
            crate::execution::delete_category,
            crate::execution::get_all_categories,
        ),
        modifiers(&SecurityAddon),
    )]
    pub struct ApiDoc;
    */

    //defining cors structure to allow stuff
    /*
    let cors = CorsOptions::default()
    .allowed_origins(AllowedOrigins::all())
    .allowed_methods(
        vec![Method::Get, Method::Post, Method::Patch, Method::Delete, Method::Put]
            .into_iter()
            .map(From::from)
            .collect(),
    )
    .allow_credentials(true);
    */

    //let db = Arc::new(db::DB::new().expect("Failed to initialize database"));
    rocket::build()
        //.attach(cors.to_cors().unwrap()) //attaching cors for rocket to manage it
        //.manage(db)
        .mount("/", todo::todo_routes())
        //.mount("/",
        //   SwaggerUi::new("/api/swagger/<_..>").url("/api/api-docs/openapi.json", ApiDoc::openapi()),
        //)
        .configure(rocket::Config {
            address: "0.0.0.0".parse().expect("invalid address"),
            port: 8000,
            ..Default::default()
        })
}