package com.quivis.quivisapp.medicalhistory;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicalHistoryService {

    @Autowired
    private MedicalHistoryRepository medicalHistoryRepository;

    public List<MedicalHistoryEntry> getAllMedicalHistoryEntries() {
        return medicalHistoryRepository.findAll(); // Returns always a list of MedicalHistoryEntry objects (could be empty), no null check needed.
    }

    public Optional<MedicalHistoryEntry> getMedicalHistoryEntryById(Long id) {
        return medicalHistoryRepository.findById(id); // Returns an Optional<MedicalHistoryEntry> object, which is either an entry or empty, no null check needed.
    }

    public void addMedicalHistoryEntry(MedicalHistoryEntry medicalHistoryEntry) {
        medicalHistoryRepository.save(medicalHistoryEntry);
    }

    public void updateMedicalHistoryEntry(Long id, MedicalHistoryEntry medicalHistoryEntry) {
        if (medicalHistoryRepository.existsById(id)) {
            medicalHistoryRepository.save(medicalHistoryEntry);
        } else {
            throw new EntityNotFoundException("Entry with " + id + " not found.");
        }
    }

    public void deleteMedicalHistoryEntry(Long id) {
        medicalHistoryRepository.deleteById(id);
    }
}
