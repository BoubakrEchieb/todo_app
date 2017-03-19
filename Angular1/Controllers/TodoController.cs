using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular1.Models;

namespace Angular1.Controllers
{
    [Route("api/[Controller]")]
    public class TodoController : Controller
    {
        private ITodoRepository _repository;

        public TodoController(ITodoRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public IActionResult GetTodos()
        {
            return Ok(_repository.GetTodos());
        }
        [HttpGet("{id}", Name ="GetTodo")]
        public IActionResult GetTodo(int id)
        {
            var todo = _repository.GetTodoById(id);
            if (todo == null)
            {
                return NotFound($"No todo found with the id {id}");
            }
            return Ok(todo);
        }
        [HttpPost]
        public IActionResult AddTodo([FromBody]Todo todo)
        {
            if (string.IsNullOrEmpty(todo.Description))
            {
                return BadRequest("The Description field must not be empty");
            }
            _repository.AddTodo(todo);
            return CreatedAtRoute("GetTodo", new { id = todo.Id }, todo);

        }
        [HttpDelete("{id}")]
        public IActionResult Remove(int id)
        {
            var _todo = _repository.GetTodoById(id);
            if (_todo == null)
            {
                return NotFound($"No todo found with the id {id}");
            }
            _repository.DeleteTodo(_todo);
            return Ok();
        }
    }
}
