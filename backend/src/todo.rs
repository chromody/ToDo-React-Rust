//rocket stuff for backend
use rocket::http::Status; // to return a status code
use rocket::serde::{Serialize, Deserialize, json::Json}; // for handling jsons
use rocket::State; // for handling state???
use rocket::request::{FromRequest, Outcome}; //for outcome and optional handling
use rocket::Route;

//for jsons
use serde_json::json;

#[get("/api/alive")]
fn alive() -> Result<Json<serde_json::Value>, Status> {
    Ok(Json(json!({"status": "alive"})))
}

// Export the routes
pub fn todo_routes() -> Vec<Route> {
    routes![alive]
}