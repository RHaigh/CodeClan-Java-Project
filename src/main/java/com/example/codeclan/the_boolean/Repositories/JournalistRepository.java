package com.example.codeclan.the_boolean.Repositories;

import com.example.codeclan.the_boolean.Models.Journalist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JournalistRepository extends JpaRepository<Journalist, Long> {
}
