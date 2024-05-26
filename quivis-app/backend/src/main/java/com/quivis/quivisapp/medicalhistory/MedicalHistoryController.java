package com.quivis.quivisapp.medicalhistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class MedicalHistoryController {

    @Autowired
    private MedicalHistoryService medicalHistoryService;

    @GetMapping
    public List<MedicalHistoryEntry> getAllEntries() {
        return medicalHistoryService.getAllMedicalHistoryEntries();
    }

    @GetMapping("/{id}")
    public Optional<MedicalHistoryEntry> getMedicalHistoryEntry(@PathVariable Long id) {
        return medicalHistoryService.getMedicalHistoryEntryById(id);
    }

    @PostMapping
    public void addCustomer(@RequestBody MedicalHistoryEntry entry) {
        medicalHistoryService.addMedicalHistoryEntry(entry);
    }

    @PutMapping("/{id}")
    public void updateCustomer(@PathVariable Long id, @RequestBody MedicalHistoryEntry entry) {
        medicalHistoryService.updateMedicalHistoryEntry(id, entry);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        medicalHistoryService.deleteMedicalHistoryEntry(id);
    }
}
