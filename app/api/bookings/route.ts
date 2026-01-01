import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        {
          success: false,
          message: "Database not configured",
        },
        { status: 503 },
      )
    }

    const body = await request.json()

    const client = await clientPromise
    const db = client.db("lifebeyondmedicine")
    const collection = db.collection("bookings")

    const booking = {
      ...body,
      createdAt: new Date(),
      status: "pending",
    }

    const result = await collection.insertOne(booking)

    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully",
        bookingId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit booking",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        {
          success: false,
          message: "Database not configured",
        },
        { status: 503 },
      )
    }

    const client = await clientPromise
    const db = client.db("lifebeyondmedicine")
    const collection = db.collection("bookings")

    const bookings = await collection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(
      {
        success: true,
        bookings,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
