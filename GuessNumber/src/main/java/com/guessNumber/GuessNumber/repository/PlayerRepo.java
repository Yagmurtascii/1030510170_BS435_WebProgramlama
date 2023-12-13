package com.guessNumber.GuessNumber.repository;

import com.guessNumber.GuessNumber.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlayerRepo extends JpaRepository<Player,Integer> {
    List<Player> findByUsernameAndPassword(String username, String password);
    boolean existsByUsernameOrEmail(String username, String email);

    Optional<Player> findById(Integer id);
}
