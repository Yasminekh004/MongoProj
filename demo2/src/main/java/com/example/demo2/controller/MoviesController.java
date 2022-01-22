package com.example.demo2.controller;

import com.example.demo2.model.Movies;
import com.example.demo2.exception.ResourceNotFoundException;
import com.example.demo2.repository.MoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MoviesController {

    @Autowired
    private MoviesRepository movieR;

    @GetMapping("/movies")
    public List<Movies> getAllMovies()
    {
        return movieR.findAll();
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity<Movies> getMovieBId(@PathVariable(value = "id")String movieId)
        throws ResourceNotFoundException
    {
        Movies m = movieR.findById(movieId).orElseThrow(() -> new ResourceNotFoundException("Movie not found for this id :: " + movieId));
        return ResponseEntity.ok().body(m);
    }

    @PostMapping("/movies")
    public ResponseEntity<Movies> createMovie(@Valid @RequestBody Movies m) {
        Movies movie = movieR.save(new Movies(m.getName(), m.getAuthor(), m.getDescription(), false));
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping("/movies/{id}")
    public ResponseEntity<Movies> updateMovie(@PathVariable(value = "id") String moviesId,
                                                   @Valid @RequestBody Movies moviesDetails) throws ResourceNotFoundException {
        Movies m = movieR.findById(moviesId)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found for this id :: " + moviesId));

        m.setName(moviesDetails.getName());
        m.setAuthor(moviesDetails.getAuthor());
        m.setDescription(moviesDetails.getDescription());
        m.setWatched(moviesDetails.isWatched());
        final Movies updatedMove = movieR.save(m);
        return ResponseEntity.ok(updatedMove);
    }

    @DeleteMapping("/movies/{id}")
    public Map<String, Boolean> deleteMovie(@PathVariable(value = "id") String movieId)
            throws ResourceNotFoundException {
        Movies m = movieR.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found for this id :: " + movieId));

        movieR.delete(m);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
