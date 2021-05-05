package com.cahcommercial.bulkupload

import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*
import javax.websocket.server.PathParam

@RestController
@RequestMapping("srd")
class SRDController {
    private val log = LoggerFactory.getLogger(javaClass)


    @PutMapping("/status/{status}")
    fun updateStatus(@PathParam("status") status: String, @RequestBody update: BulkStatusUpdate): UpdateResult {
        //TODO actually update SRD

        println("Status: $status")
        println("Update: $update")

        val results = mapOf(
            HttpStatus.OK to listOf(UUID.randomUUID(), UUID.randomUUID()),
            HttpStatus.NOT_FOUND to listOf(UUID.randomUUID())
        )

        return UpdateResult(results)
    }

    data class BulkStatusUpdate(
        val authorID: Long,
        val rational: String,
        val ids: List<UUID>
    )

    data class UpdateResult(val results: Map<HttpStatus, List<UUID>>)

}